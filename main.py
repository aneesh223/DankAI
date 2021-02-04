# DankAI - AI to help betters win Dank Memer Bets
#     Copyright (C) 2021  Ved Malandkar and Aneesh Jonnala

#     This program is free software: you can redistribute it and/or modify
#     it under the terms of the GNU General Public License as published by
#     the Free Software Foundation, either version 3 of the License, or
#     (at your option) any later version.

#     This program is distributed in the hope that it will be useful,
#     but WITHOUT ANY WARRANTY; without even the implied warranty of
#     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#     GNU General Public License for more details.

#     You should have received a copy of the GNU General Public License
#     along with this program.  If not, see <https://www.gnu.org/licenses/>.

import random

def calc():
    numlist = [1,2,3,4,5,6,7,8,9,10,11,12]
    number1 = random.choice(numlist)
    number2 = random.choice(numlist)
    print(f"{number1}, {number2}")
    print(abs(number1 - number2))
    if abs(number1 - number2) == 1:
        print("pls bet 100")
    elif abs(number1 - number2) == 2:
        print("pls bet 50")
    elif abs(number1 - number2) == 3:
        print("pls bet max")
    elif abs(number1 - number2) == 5:
        print("pls bet 50")
    elif abs(number1 - number2) == 8:
        print("pls bet 50")
    elif abs(number1 - number2) == 11:
        print("pls bet max")

calc()