from .base import *

DEBUG = True

ALLOWED_HOSTS = ['*']

def get_env_variable(var_name):
  try:
    return os.environ[var_name]
  except KeyError:
    error_msg = 'Set the {} environment variable'.format(var_name)
    

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
		'NAME': 'cakewalk',
        'USER': 'root',
        'PASSWORD': 'gold3819',
        'HOST': 'mariadb',
        'PORT': '3306',

    }
}

KAKAO_CONFIG ={
    "KAKAO_REST_API_KEY":'b0ed2f28699406d89d7290e89c5ae081',
    "KAKAO_REDIRECT_URI":'https://port-0-cakewalk-backend-1i9hi4d24l6qowkrv.gksl1.cloudtype.app/account/login/kakao/callback/',
    "KAKAO_CLIENT_SECRET_KEY":"vXFeq1ibnjclm4UsBG0cGdPpioFk23on",
}
