from django.db import models

# Create your models here.
class numlists(models.Model):
    no = models.CharField(max_length=4)
    content = models.TextField()

    def __str__(self):
        return self.no