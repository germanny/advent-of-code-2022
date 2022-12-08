import { strategy } from "./data/strategy";
import { findObjectInArrayByKey, sumAllNumbersInArray } from "../utils";

// INCOMPLETE

// A for Rock, B for Paper, and C for Scissors.
// X for Rock, Y for Paper, and Z for Scissors.

// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

// The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

// What would your total score be if everything goes exactly according to your strategy guide?

// For each round:
//   - Determine what shape you played
//   - Score the shape you played
//   - Determine if you won - whose "beats" value wins out?
//   - Score your outcome in the round (loss, tie, or win)
//   - Save score to an array
// Finally:
//   - Add up total score
type ShapeData = { [key: string]: string | number };
type GetRoundScoreProps = {
  shapeElfPlayed: ShapeData;
  shapeYouPlayed: ShapeData;
};
type GetRoundScoreReturn = {
  elf: number;
  you: number;
};

const shapeData: ShapeData[] = [
  { play: "rock", elf: "A", you: "X", score: 1, beats: "scissors" },
  { play: "paper", elf: "B", you: "Y", score: 2, beats: "rock" },
  { play: "scissors", elf: "C", you: "Z", score: 3, beats: "paper" },
];

const roundScore: { [key: string]: number } = {
  loss: 0,
  tie: 3,
  win: 6,
};

const getPlayHighScore = (elfScore: number, yourScore: number) =>
  Math.max(elfScore, yourScore);

const getRoundScore = ({
  shapeElfPlayed,
  shapeYouPlayed,
}: GetRoundScoreProps): GetRoundScoreReturn => {
  const roundScores = {
    elf: roundScore.tie,
    you: roundScore.tie,
  };

  if (Number(shapeElfPlayed.score) === Number(shapeYouPlayed.score)) {
    console.log("tie");
    return roundScores;
  }

  roundScores.elf =
    Number(shapeElfPlayed.score) > Number(shapeYouPlayed.score)
      ? roundScore.win
      : roundScore.loss;

  roundScores.you =
    Number(shapeElfPlayed.score) < Number(shapeYouPlayed.score)
      ? roundScore.win
      : roundScore.loss;

  return roundScores;
};

function loopStrategy(strategy: any) {
  let myTotalScore: number[] = [];
  strategy.forEach((round: Record<string, string>, index: number) => {
    for (const [key, value] of Object.entries(round)) {
      const shapeElfPlayed = findObjectInArrayByKey(shapeData, key);
      const shapeYouPlayed = findObjectInArrayByKey(shapeData, value);
      const shapeElfPlayedScore = Number(shapeElfPlayed?.score);
      const shapeYouPlayedScore = Number(shapeYouPlayed?.score);
      const roundHighScore = getPlayHighScore(
        shapeElfPlayedScore,
        shapeYouPlayedScore
      );
      const roundScores = getRoundScore({
        shapeElfPlayed,
        shapeYouPlayed,
      });
      const myRoundTotal = shapeYouPlayedScore + roundScores.you;
      myTotalScore.push(myRoundTotal);

      console.log("==================");
      console.log({ shapeElfPlayed });
      console.log({ shapeYouPlayed });
      console.log({ shapeElfPlayedScore });
      console.log({ shapeYouPlayedScore });
      console.log({ roundHighScore });
      console.log({ roundScores });
      console.log({ myRoundTotal });
      console.log("==================");
    }
  });

  console.log({ myTotalScore });
  const myTotal = sumAllNumbersInArray(myTotalScore);
  console.log({ myTotal });
}

loopStrategy(strategy);
