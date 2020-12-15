// External Dependencies
import React, { useRef, useState } from "react";

// Internal Dependencies
import story_id from "./getId";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import ChunkCard from "../ChunkCard/ChunkCard";
import { Chunk } from "../../types";

// Styles
import useStyles from "./AppStyles";
import { Button } from "@material-ui/core";

const zeroPad = (value: number) =>
  ((rounded) => (rounded < 10 ? `0${rounded}` : rounded.toString()))(
    Math.floor(value)
  );

const toTimeStamp = (seconds: number) =>
  `${zeroPad(seconds / (60 * 60))}:${zeroPad(seconds / 60)}:${zeroPad(
    seconds % 60
  )}:${zeroPad(Math.round((seconds - Math.floor(seconds)) * 100))}`;

const getLastEndTimeStamp = (chunks: Chunk[]): string =>
  chunks.length > 0 ? chunks[chunks.length - 1].endtimestamp : "00:00:00:00";

const getLastEndTimeSeconds = (chunks: Chunk[]): number =>
  chunks.length > 0 ? chunks[chunks.length - 1].endtimeseconds : 0;

/**
 * Given a list of chunks and a time (as a fraction),
 * if there exists a chunk that that time is within,
 * return the chunk, else, return null
 *
 * @param chunks
 * @param time
 */
const getEnclosingChunk = (chunks: Chunk[], time: number): Chunk | null => {
  for (var i = 0; i < chunks.length; i++) {
    if (time > chunks[i].starttimeseconds && time < chunks[i].endtimeseconds)
      return chunks[i];
  }
  return null;
};

const App: React.FC<{}> = () => {
  // TODO: Use reducer to handle actions here

  const handleNewChunk = () => {
    const enclosingChunk = getEnclosingChunk(chunks, progressRef.current);
    if (enclosingChunk != null) {
      setChunks(
        chunks
          .filter((c) => c.id !== enclosingChunk.id)
          .concat([
            {
              starttimestamp: enclosingChunk.starttimestamp,
              starttimeseconds: enclosingChunk.starttimeseconds,
              endtimestamp: toTimeStamp(progressRef.current * duration),
              endtimeseconds: progressRef.current,
              creatorid: "test",
              updatedat: new Date(),
              id: (Date.now() + 10).toString(),
            },
            {
              starttimestamp: toTimeStamp(progressRef.current * duration),
              starttimeseconds: progressRef.current,
              endtimestamp: enclosingChunk.endtimestamp,
              endtimeseconds: enclosingChunk.endtimeseconds,
              creatorid: "test",
              updatedat: new Date(),
              id: Date.now().toString(),
            },
          ])
      );
    } else {
      setChunks(
        chunks.concat([
          {
            starttimestamp: getLastEndTimeStamp(chunks),
            endtimestamp: toTimeStamp(progressRef.current * duration),
            starttimeseconds: getLastEndTimeSeconds(chunks),
            endtimeseconds: progressRef.current,
            creatorid: "Test",
            updatedat: new Date(),
            id: Date.now().toString(),
          },
        ])
      );
    }
  };

  const progressRef = useRef<number>(0);

  const [duration, setDuration] = useState(0);

  const [chunks, setChunks] = useState<Chunk[]>([]);

  const classes = useStyles();

  return (
    <main>
      {/* The 'http://localhost:8845' part of the url below is temporary, and not needed in production*/}
      <div className={classes.videoPlayerContainer}>
        <VideoPlayer
          setDuration={setDuration}
          progress={progressRef}
          url={`http://localhost:8845/api/watch/getvideo/${story_id}`}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleNewChunk}>
        Create Chunk
      </Button>
      <br />
      Duration: {duration}
      {chunks.map((c) => (
        <ChunkCard key={c.id} chunk={c} />
      ))}
    </main>
  );
};

export default App;
