export const generateInitialBoard = (rows, cols, mines) => {
    const board = Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: cols }, (_, colIndex) => ({
            row: rowIndex,
            col: colIndex,
            isMine: false,
            isSelected: false,
            isFlagged: false,
            adjacentMines: 0,
        }))
    );

    placeMines(board, mines, rows, cols);
    calculateAdjacentMines(board, rows, cols);

    return board;
};

const placeMines = (board, mines, rows, cols) => {
    let minesPlaced = 0;
    while (minesPlaced < mines) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        if (!board[row][col].isMine) {
            board[row][col].isMine = true;
            minesPlaced++;
        }
    }
};

const calculateAdjacentMines = (board, rows, cols) => {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1],
    ];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (!board[row][col].isMine) {
                let count = 0;
                directions.forEach(([dx, dy]) => {
                    const newRow = row + dx;
                    const newCol = col + dy;
                    if (
                        newRow >= 0 &&
                        newRow < rows &&
                        newCol >= 0 &&
                        newCol < cols &&
                        board[newRow][newCol].isMine
                    ) {
                        count++;
                    }
                });
                board[row][col].adjacentMines = count;
            }
        }
    }
};
