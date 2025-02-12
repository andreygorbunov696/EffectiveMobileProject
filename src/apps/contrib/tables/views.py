from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class TableView(TemplateView):

    template_name = 'tables/tables.html'
    


