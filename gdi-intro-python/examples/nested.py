raw_input = input('Please enter a number: ')
x = int(raw_input)
if x > 5:
    print('x is greater than 5')
    if x > 10:
        print('...it is also greater than 10')
    print('Done evaluating the x > 10 block')
print('Done evaluating the x > 5 block')
