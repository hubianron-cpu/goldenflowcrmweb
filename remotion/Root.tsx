import {Composition} from 'remotion';
import {LeadFollowupVideo} from './videos/LeadFollowupVideo';
import {VIDEO_CONFIG} from './videoCopy';

export const RemotionRoot = () => {
  return (
    <Composition
      id="LeadFollowupVideo"
      component={LeadFollowupVideo}
      durationInFrames={VIDEO_CONFIG.durationInFrames}
      fps={VIDEO_CONFIG.fps}
      width={VIDEO_CONFIG.width}
      height={VIDEO_CONFIG.height}
    />
  );
};
