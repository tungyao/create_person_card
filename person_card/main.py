import random


def create(true_card_area="500224",true_card_birthday="19970606", true_card_order="666"):
    true_card_auth = 0
    dirt = {"0": "1", "1": "0", "2": "X", "3": "9", "4": "8", "5": "7", "6": "6", "7": "5", "8": "4", "9": "3",
            "10": "2"}
    auth_code = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    now_17 = str(true_card_area + true_card_birthday + true_card_order)
    S = now_17
    now_17 = [int(i) for i in now_17]
    for i in range(len(auth_code)):
        r = auth_code[i] * now_17[i]
        true_card_auth += r
    print(true_card_auth)
    true_card_auth = dirt.get(str(true_card_auth % 11))
    TRUE = S + true_card_auth
    # print(TRUE)
    return TRUE
R = []
for i in range(30):
    r = str(random.randint(0, 999))
    if(len(r)==2):
        r= "0"+r
    elif(len(r)==1):
        r = "00"+r
    order = r
    create(true_card_birthday="19970606",true_card_order="666")

