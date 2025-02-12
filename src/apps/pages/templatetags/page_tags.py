from django import template
from django.urls import resolve, NoReverseMatch, reverse

register = template.Library()

@register.filter(name='url_exists')
def url_exists(value):
    try:
        reverse(value)  # Попытка разрешить маршрут
        return True
        
    except NoReverseMatch:
        return False