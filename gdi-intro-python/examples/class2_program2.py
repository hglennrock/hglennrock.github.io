input_value = ''
while input_value != 'quit':
    input_value = input('Enter a number to see its square, or type quit: ')
    #For Python 2.7, replace the previous line with 
    #input_value = raw_input('Enter a number to see its square, or type quit: ')
    if input_value != 'quit':
	    number = input_value
	    squared_value = int(number) * int(number)
	    print('The square of ' + str(input_value) + ' is ' + str(squared_value) + '.')
print('Goodbye!')