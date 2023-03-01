""" Testing QR Code Generation and API """

import qrcode


data = "TESTING QR CODE"

img = qrcode.make(data)


img.save("backend\\wood_products\\img\\test.png")



class QRCode():
    """ Encodes data into a QR Code Img """
    def __init__(self, data):
        self.data = data

    def encode(self):
        img = qrcode.make(self.data)
        return img

