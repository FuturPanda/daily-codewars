# --- 31 March ---
# def sum_array(a):
#     if len(a) == 0 : 
#         return 0
#     sum = 0 
#     for num in a :
#         sum += num
#     return sum

# --- Best Practice ---
# def sum_array(a):
#   return sum(a)

# --- Comments --- 
#       ----           ----           -----           ----            ----            ----            ---- 
# --- 31 March ---
# --- Instructions --- 
# Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

# Examples:

# solution('abc', 'bc') # returns true
# solution('abc', 'd') # returns false
# --- My Solution ---
# def solution(text, ending):
#     return text[-len(ending):] == ending
# --- Best Practice ---
# def solution(string, ending):
#     return string.endswith(ending)

# --- Comments --- 
#       ----           ----           -----           ----            ----            ----            ---- 

# --- 31 March ---

# --- Instructions ---
# A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

# For example, take 153 (3 digits), which is narcissistic:

#     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
# and 1652 (4 digits), which isn't:

#     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
# The Challenge:

# Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

# This may be True and False in your language, e.g. PHP.

# Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

# --- My Solution
# def narcissistic( value ):
#     narcissistic_num = 0
#     for num in str(value) : 
#        narcissistic_num += (int(num) ** len(str(value)))
#     return narcissistic_num == value
    
# --- Best Practice ---
# def narcissistic(value):
#     return value == sum(int(x) ** len(str(value)) for x in str(value))

# --- Comments ---


# ---- ---- ----- ---- ---- ---- ----
# 6 kyu
# Highest Scoring Word

# Given a string of words, you need to find the highest scoring word.

# Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

# For example, the score of abad is 8 (1 + 2 + 1 + 4).

# You need to return the highest scoring word as a string.

# If two words score the same, return the word that appears earliest in the original string.

# All letters will be lowercase and all inputs will be valid.

# def high(x):
#     words = x.split(" ")
#     letters = "abcdefghijklmnopqrstuvwxyz"
#     scores = []
#     for word in words : 
#         score = 0
#         for letter in word : 
#             score += (letters.index(letter)+1)
#         scores.append(score)
#     max = [scores[0], 0]
#     for i in range(1, len(scores)):
#         if scores[i] > max[0] : 
#             max = [scores[i], i]
#     return words[max[1]]
            


# --- Best Practice ---
# def high(x):
#     words=x.split(' ')
#     list = []
#     for i in words:
#         scores = [sum([ord(char) - 96 for char in i])]
#         list.append(scores)
#     return words[list.index(max(list))]

# --- Comments ---
# Ok découverte de la fonction max() dans une liste. Super simple. 


# ---- ---- ----- ---- ---- ---- ----
# --- 3 April ---

# --- Instructions ---
# An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

# Example: (Input --> Output)

# "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

# isIsogram "Dermatoglyphics" = true
# isIsogram "moose" = false
# isIsogram "aba" = false
# --- My Solution
# def is_isogram(string):
#     for letter in string:
#         if string.lower().count(letter) > 1 : return False
#     return True
# --- Best Practice ---
# def is_isogram(string):
#     return len(string) == len(set(string.lower()))
# --- Comments ---
#  Set works also in python ! 


# ---- ---- ----- ---- ---- ---- ----
# --- 3 April ---

# --- Instructions ---
# Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

# Note: a and b are not ordered!

# Examples (a, b) --> output (explanation)
# (1, 0) --> 1 (1 + 0 = 1)
# (1, 2) --> 3 (1 + 2 = 3)
# (0, 1) --> 1 (0 + 1 = 1)
# (1, 1) --> 1 (1 since both are same)
# (-1, 0) --> -1 (-1 + 0 = -1)
# (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
# Your function should only return a number, not the explanation about how you get that number.


# --- My Solution
# def get_sum(a,b):
#     sort = sorted([a, b])
#     result = 0 
#     for i in range(sort[1]-sort[0]+1) : 
#         result += sort[1]-i
#     return result

# --- Best Practice ---
# def get_sum(a,b):
#     return sum(range(min(a, b), max(a, b) + 1))

# --- Comments ---
# Totally forget the sum function. le range est interessant aussi 

# ---- ---- ----- ---- ---- ---- ----
# --- 31 March ---

# --- Instructions ---
# Make the Deadfish Swim
# Write a simple parser that will parse and run Deadfish.

# Deadfish has 4 commands, each 1 character long:

# i increments the value (initially 0)
# d decrements the value
# s squares the value
# o outputs the value into the return array
# Invalid characters should be ignored.

# --- My Solution


# def parse(data):
#     input_commands = [*data]
#     current_value = 0
#     result_arr = []
#     def add(num) : 
#         return num+1
#     def dec(num) : 
#         return num-1
#     def square(num) :
#         return num*num
#     def output(num) : 
#         result_arr.append(num)
#     commands = { "i" : add, "d" : dec, "s" : square , "o" : output}
#     for command in input_commands :
#         if command == "o" :
#             commands[command](current_value)
#         elif command in commands :
#             current_value = commands[command](current_value)
#         else : 
#             continue
#     return result_arr
# --- Best Practice ---
# --- 1 : Elif
# def parse(data):
#     value = 0
#     res=[]
#     for c in data:
#         if c=="i": value+=1
#         elif c=="d": value-=1
#         elif c=="s": value*=value
#         elif c=="o": res.append(value)
#     return res

# --- 2 : Dictionnaire 
# COMMANDS = {
#     'i': lambda x: x + 1,
#     'd': lambda x: x - 1,
#     's': lambda x: x * x,
# }

# def parse(data):
#     result, x = [], 0
#     for c in data:
#         if c == 'o':
#             result.append(x)
#         elif c in COMMANDS:
#             x = COMMANDS[c](x)
#     return result

# --- Comments ---
# Checker la doc sur "lambda " pour les fonction dans les dict. 


# ---- ---- ----- ---- ---- ---- ----


# --- 31 March ---

# --- Instructions ---
# Simple Pig Latin
# Move the first letter of each word to the end of it, then add "ay" to 
# the end of the word. Leave punctuation marks untouched.
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !

# --- My Solution

# def pig_it(text):
#     words = text.split(" ")
#     ponctuation = "!?."
#     result = []
#     for word in words : 
#         letters = [*word]
#         if word in ponctuation : 
#             letters.append(letters.pop(0))
#         else :
#             letters.append(letters.pop(0)+"ay")
#         result.append("".join(letters))
#     return(" ".join(result))

# --- Best Practice ---
# --- 1 : 
# def pig_it(text):
#     res = []
    
#     for i in text.split():
#         if i.isalpha():
#             res.append(i[1:]+i[0]+'ay')
#         else:
#             res.append(i)
            
#     return ' '.join(res)
# --- 2
# def pig_it(text):
#     lst = text.split()
#     return ' '.join( [word[1:] + word[:1] + 'ay' if word.isalpha() else word for word in lst])


# --- Comments ---


# ---- ---- ----- ---- ---- ---- ----

# --- 31 March ---

# --- Instructions ---
# Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

# Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

# --- My Solution
# def count_bits(n):
#     binary = f"{n:08b}"
#     number = 0
#     for num in binary : 
#         if num == "1" :
#             number += 1
#     return number

# --- Best Practice ---
# def countBits(n):
#     return bin(n).count("1")


# --- Comments ---
# Think about the count() method. 


# ---- ---- ----- ---- ---- ---- ----

# def zeros(n):
#     final_num = 1
#     for i in range(n) : 
#         print(i)
#         final_num = final_num * (i+1)
#     list_num = [*str(final_num)]
#     result = 0 
#     for x in reversed(list_num) :
#         if x == "0" :
#             result += 1
#         else : 
#             return result


# print(zeros(6))

# -------

# --- 31 March ---

# --- Instructions ---
# Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

# Task
# You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

# Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

# Examples
# A size 3 diamond:

#  *
# ***
#  *
# ...which would appear as a string of " *\n***\n *\n"


# --- My Solution
# def diamond(n):
#     if n % 2 == 0 or n < 0 : 
#         return None
#     else :
#         base, result = "*", []
#         for i in range((n//2)+1) : 
#             result.append(((n//2)-i)*" "+(i*2+1)*base+"\n")
#         symetry = result[-2::-1]
#         return("".join(result) +"".join(symetry))

# --- Best Practice ---


# def diamond(n):
#     if n > 0 and n % 2 == 1:
#         diamond = ""
#         for i in range(n):
#             diamond += " " * abs((n/2) - i)
#             diamond += "*" * (n - abs((n-1) - 2 * i))
#             diamond += "\n"
#         return diamond
#     else:
#         return None
# --- Comments ---


# ---- ---- ----- ---- ---- ---- ----

# --- 31 March ---

# --- Instructions ---
# The Fibonacci numbers are the numbers in the following integer sequence (Fn):

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

# such as

# F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

# Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

# F(n) * F(n+1) = prod.

# Your function productFib takes an integer (prod) and returns an array:

# [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
# depending on the language if F(n) * F(n+1) = prod.

# If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

# [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
# F(n) being the smallest one such as F(n) * F(n+1) > prod.

# --- My Solution
# def productFib(prod):
#     fib = [0, 1]
#     while fib[0]*fib[1] <= prod :
#         if fib[0]*fib[1] == prod : return [fib[0], fib[1], True]
#         current_num = fib[0] + fib[1]
#         fib = fib[1:]
#         fib.append(current_num)
#     return [fib[0], fib[1], False]

# --- Best Practice ---

# def productFib(prod):
#   a, b = 0, 1
#   while prod > a * b:
#     a, b = b, a + b
#   return [a, b, prod == a * b]

# --- Comments ---


# ---- ---- ----- ---- ---- ---- ----

# Mexican wave 

# The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

# The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
# Task
# In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
# Rules
#  1.  The input string will always be lower case but maybe empty.

#  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
# Example
def wave(str) : 
    result = []
    for i in str : 
        word = [*str]
        

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
