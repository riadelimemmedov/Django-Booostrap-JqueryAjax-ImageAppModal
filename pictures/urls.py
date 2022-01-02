from django.urls import path
from .views import *

app_name = 'pictures'

urlpatterns = [
    path('',HomeView.as_view(),name='home'),
    path('data-json/',PictureView.as_view(),name='datajson')
] 