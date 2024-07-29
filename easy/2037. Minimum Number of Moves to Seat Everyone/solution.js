/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let sortedSeats = seats.sort((a,b)=>a-b)
    let sortedStudents = students.sort((a,b)=>a-b)

    return sortedSeats.reduce((acc, seat, i) => {
        let currMoves = 0;
        while(true){
            if(seat === sortedStudents[i] + currMoves) break;
            currMoves += seat < sortedStudents[i] + currMoves ? -1 : 1
        }
        return acc += currMoves < 0 ? currMoves*(-1) : currMoves
    }, 0)
};