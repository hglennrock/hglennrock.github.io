raw_input = input('Please enter a number: ')
#For Python 2.7 use
#raw_input = raw_input('Please enter a number: ')
x = int(raw_input)
if x > 5:
    print('x is greater than 5')
elif x < 5:
    print('x is less than 5')
else:
    print('x is equal to 5')