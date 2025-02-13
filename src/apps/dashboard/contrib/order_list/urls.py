from django.urls import include, path, re_path

from . import views

urlpatterns = [
    path('', views.OrderListView.as_view(), name='order_list'),
]