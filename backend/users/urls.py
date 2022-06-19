from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, user_credentials

app_name = 'users'

urlpatterns = [
    path('register/', CustomUserCreate.as_view(), name='create_user'),
    path('credentials/', user_credentials, name='user_credentials'),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist'),
]