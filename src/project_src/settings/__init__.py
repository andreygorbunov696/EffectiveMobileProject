import os

print("Running with develop settings.")
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project_src.settings.base')
from .develop import *