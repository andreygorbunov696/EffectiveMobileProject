from django import template

register = template.Library()

@register.inclusion_tag('pages/tags/show_sidebar.html', takes_context=True)
def show_sitebar(context):
    return context