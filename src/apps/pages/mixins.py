class AjaxTemplateMixin:
    def is_ajax(self):
        return self.request.headers.get('x-requested-with') == 'XMLHttpRequest'

    def get_template_names(self):
        if self.is_ajax():
            print("Using AJAX template:", self.ajax_template_name)
            return [self.ajax_template_name]
        print("Using default template:", self.template_name)
        return [self.template_name]
    
class TemplateViewAjaxMixin(AjaxTemplateMixin):
    pass

class DetailViewAjaxMixin(AjaxTemplateMixin):
    pass

class ListViewAjaxMixin(AjaxTemplateMixin):
    pass
