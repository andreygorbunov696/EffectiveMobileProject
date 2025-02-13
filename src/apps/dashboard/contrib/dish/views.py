from django.shortcuts import render
from django.views.generic import ListView, DetailView, TemplateView

from pages.mixins import TemplateViewAjaxMixin, DetailViewAjaxMixin, ListViewAjaxMixin
from .models import Dish

# Create your views here.

class DishListView(ListViewAjaxMixin, ListView):
    template_name = 'dish/dish_list.html'
    template_name_ajax = 'dish/dish_list_ajax.html'
    model = Dish
    context_object_name = 'dishs'