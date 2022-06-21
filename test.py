# myList = [1,2,3]
# myList.reverse()

# print(myList)
# # [3, 2, 1]
# print(myList[::-1])
# # [3, 2, 1]













import schedule

def job(name):
    print("Hello %" % name)


schedule.every().day.at('00:00').do(job, 'World')