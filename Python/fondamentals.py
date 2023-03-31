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

def high(x):
    words = x.split(" ")
    letters = "abcdefghijklmnopqrstuvwxyz"
    scores = []
    for word in words : 
        score = 0
        for letter in word : 
            score += letters.index(letter)
        scores.append(score)
    max = [scores[0], 0]
    for i in range(1, len(scores)):
        if scores[i] > max[0] : 
            max = [scores[i], i]
    return words[max[1]]
            