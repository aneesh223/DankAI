//DankAI - AI to help betters win Dank Memer Bets
//    Copyright (C) 2021  Ved Malandkar and Aneesh Jonnala
//
//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with this program.  If not, see <https://www.gnu.org/licenses/>.
function calculate() {
    var number1 = document.getElementById("Data1").value;
    var number2 = document.getElementById("Data2").value;
    if (number1 - number2 == 1) {
        document.getElementById("calculation").innerText = "pls bet 100";
    } else if (number1 - number2 == 2) {
        document.getElementById("calculation").innerText = "pls bet 50";
    } else if (number1 - number2 == 3) {
        document.getElementById("calculation").innerText = "pls bet max";
    } else if (number1 - number2 == 5) {
        document.getElementById("calculation").innerText = "pls bet 50";
    } else if (number1 - number2 == 8) {
        document.getElementById("calculation").innerText = "pls bet 50";
    } else if (number1 - number2 == 11) {
        document.getElementById("calculation").innerText = "pls bet max";
    }
}