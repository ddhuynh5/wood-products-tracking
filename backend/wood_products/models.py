from django.db import models

class WoodProduct(models.Model):
    year = models.IntegerField()
    name = models.CharField("Name", max_length=50)
    tree_type = models.CharField("Tree Type", max_length=50)
    tons = models.FloatField()

    def __str__(self):
        return self.name
