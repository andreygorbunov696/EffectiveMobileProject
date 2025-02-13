from django.urls import include, path, re_path

from . import views

urlpatterns = [      
    path('', views.AnalyticsView.as_view(), name='analytics'),
]