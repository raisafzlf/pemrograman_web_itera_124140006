
from pyramid.view import view_config
from pyramid.response import Response
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from ..models import Matakuliah
import json


@view_config(route_name='matakuliah_list', request_method='GET', renderer='json')
def get_all_matakuliah(request):
    data = request.dbsession.query(Matakuliah).all()
    return [item.to_dict() for item in data]


@view_config(route_name='matakuliah_detail', request_method='GET', renderer='json')
def get_matakuliah(request):
    item = request.dbsession.query(Matakuliah).filter_by(
        id=int(request.matchdict['id'])
    ).first()

    if item is None:
        raise HTTPNotFound(json_body={'message': 'Matakuliah tidak ditemukan'})

    return item.to_dict()


@view_config(route_name='matakuliah_create', request_method='POST', renderer='json')
def create_matakuliah(request):
    try:
        data = request.json_body
        required = ['kode_mk', 'nama_mk', 'sks', 'semester']

        for field in required:
            if field not in data or data[field] in (None, ''):
                raise HTTPBadRequest(json_body={'message': field + ' wajib diisi'})

        sks = int(data['sks'])
        semester = int(data['semester'])

        if sks <= 0 or semester <= 0:
            raise HTTPBadRequest(json_body={'message': 'SKS dan semester harus positif'})

        item = Matakuliah(
            kode_mk=data['kode_mk'],
            nama_mk=data['nama_mk'],
            sks=sks,
            semester=semester
        )

        request.dbsession.add(item)
        request.dbsession.flush()

        return item.to_dict()

    except (ValueError, TypeError):
        raise HTTPBadRequest(json_body={'message': 'SKS dan semester harus berupa angka'})


@view_config(route_name='matakuliah_update', request_method='PUT', renderer='json')
def update_matakuliah(request):
    item = request.dbsession.query(Matakuliah).filter_by(
        id=int(request.matchdict['id'])
    ).first()

    if item is None:
        raise HTTPNotFound(json_body={'message': 'Matakuliah tidak ditemukan'})

    try:
        data = request.json_body

        item.kode_mk = data.get('kode_mk', item.kode_mk)
        item.nama_mk = data.get('nama_mk', item.nama_mk)
        item.sks = int(data.get('sks', item.sks))
        item.semester = int(data.get('semester', item.semester))

        if item.sks <= 0 or item.semester <= 0:
            raise HTTPBadRequest(json_body={'message': 'SKS dan semester harus positif'})

        request.dbsession.flush()
        return item.to_dict()

    except (ValueError, TypeError):
        raise HTTPBadRequest(json_body={'message': 'SKS dan semester harus berupa angka'})


@view_config(route_name='matakuliah_delete', request_method='DELETE', renderer='json')
def delete_matakuliah(request):
    item = request.dbsession.query(Matakuliah).filter_by(
        id=int(request.matchdict['id'])
    ).first()

    if item is None:
        raise HTTPNotFound(json_body={'message': 'Matakuliah tidak ditemukan'})

    request.dbsession.delete(item)

    return {'message': 'Matakuliah berhasil dihapus'}
