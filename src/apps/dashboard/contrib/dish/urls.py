from django.urls import include, path, re_path

from . import views

urlpatterns = [
    path('', views.DishListView.as_view(), name='dish_list'),
]