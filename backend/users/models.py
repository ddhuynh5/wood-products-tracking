from django.db import models

class Users(models.Model):
    """ Users Table Django Model Schema """

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    password = models.BinaryField(max_length=255)
    role_id = models.IntegerField()
    zip_code = models.IntegerField()
    user_id = models.AutoField(primary_key=True)

    class Meta:
        db_table = "users"
        managed = False

    def __str__(self):
        """ For debugging purposes """

        return f"{str(self.email)} {str(self.role_id)}"
    

class LandOwner(models.Model):
    """ LandOwner Schema """

    user_id = models.AutoField(primary_key=True)
    carbon_project_id = models.IntegerField()
    forest_type = models.CharField(max_length=510)
    location = models.CharField(max_length=510)
    size = models.CharField(max_length=510)

    class Meta:
        db_table = "landowner"
        managed = False

    def __str__(self):
        """ For debugging purposes """

        return f"{str(self.user_id)} {str(self.forest_type)}"
    

class Mill(models.Model):
    """ Mill Schema (still need to figure out) """

    user_id = models.AutoField(primary_key=True)
    location = models.CharField(max_length=510)
    product_type = models.CharField(max_length=510)

    class Meta:
        db_table = "mill"
        managed = False
    
    def __str__(self):
        """ For debugging purposes """

        return f"{str(self.user_id)} {str(self.product_type)}"
