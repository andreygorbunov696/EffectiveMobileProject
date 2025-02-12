from django.urls import include, path, re_path

from . import views

urlpatterns = [      
    path('', views.TableView.as_view(), name='tables'),
]