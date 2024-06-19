export function Board({board}) {
    return (
        <div className="board">
            {board.map((piece, i) => (
                <div key={i}>
                    <p>{JSON.stringify(piece)}</p>
                </div>

            ))}
        </div>
    );
}