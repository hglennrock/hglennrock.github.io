input_value = input('Enter a positive integer:')
#For Python 2.7 replace line 1 with:
#input_value = raw_input('Enter a positive integer: ')
n = int(input_value)
result = 1
while n > 1:
    result = result * n
    n = n - 1
print("The factorial of " + input_value + " is:")
print(result)