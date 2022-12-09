from .base import *
from .utils import str_to_bool

DEBUG = str_to_bool(os.getenv("DEBUG", "y"))
