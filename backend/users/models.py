from django.db import models

class Users(models.Model):
    """ Users Table Django Model Schema """

    email = models.CharField(max_length=255)
    password = models.BinaryField(max_length=255)
    role_id = models.IntegerField()
    unique_id = models.AutoField(primary_key=True)

    class Meta:
        db_table = "users"
        managed = False

    def __str__(self):
        """ For debugging purposes """
        return f"{str(self.email)} {str(self.role_id)}"
