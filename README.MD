1) запустить вирт окружение
2) установить зависимости(pip install -r requirements.txt)
3) запустить redis (redis-server) если скачан
4) cd src
5) celery -A backend.tasks worker --loglevel=info
6) celery -A backend.tasks flower --loglevel=info
