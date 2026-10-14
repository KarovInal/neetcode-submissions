class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        squares = {1: {}, 4: {}, 7: {}}

        rows = {key: set() for key in range(0, 9)}
        cols = {key: set() for key in range(0, 9)}

        for row in [1, 4, 7]:
            for col in [1, 4, 7]:
                squares[row][col] = set()
                current_square = squares[row][col]

                for _row in range(row - 1, row + 2):
                    for _col in range(col - 1, col + 2):
                        _cel = board[_row][_col]

                        if _cel == ".":
                            continue

                        if _cel in rows[_row]:
                            return False
                        elif _cel in cols[_col]:
                            return False
                        elif _cel in current_square:
                            return False

                        current_square.add(_cel)

                        rows[_row].add(_cel)
                        cols[_col].add(_cel)

        return True









