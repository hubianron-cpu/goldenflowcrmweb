import {Composition} from 'remotion';
import {DailyClosingVideo} from './videos/DailyClosingVideo';
import {LeadFollowupAdVideo, LeadFollowupHeroVideo, LeadFollowupVideo} from './videos/LeadFollowupVideo';
import {VIDEO_CONFIG} from './videoCopy';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="LeadFollowupVideo"
        component={LeadFollowupVideo}
        durationInFrames={VIDEO_CONFIG.durationInFrames}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
      <Composition
        id="LeadFollowupAdVideo"
        component={LeadFollowupAdVideo}
        durationInFrames={VIDEO_CONFIG.durationInFrames}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
      <Composition
        id="LeadFollowupHeroVideo"
        component={LeadFollowupHeroVideo}
        durationInFrames={VIDEO_CONFIG.durationInFrames}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
      <Composition
        id="DailyClosingVideo"
        component={DailyClosingVideo}
        durationInFrames={VIDEO_CONFIG.durationInFrames}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
    </>
  );
};
