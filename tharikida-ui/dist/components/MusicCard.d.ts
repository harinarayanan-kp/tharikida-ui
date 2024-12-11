/**
 * MusicCardProps Interface
 *
 * Represents the properties passed to the `MusicCard` component.
 */
interface MusicCardProps {
    /** The name of the music track. */
    musicName?: string;
    /** The name of the artist. */
    artist?: string;
    /** Callback function triggered when play button is clicked. */
    onPlay?: () => void;
    /** The URL of the music track. */
    musicUrl?: string;
    /** The URL of the image associated with the music track. */
    images?: string[];
    /** The current playback position as a percentage (0-100). */
    currentPosition?: number;
}
/**
 * MusicCard Component
 *
 * A visual card component to display music information such as name, artist, album image,
 * and playback controls.
 *
 * @param musicName - The name of the music track.
 * @param artist - The name of the artist.
 * @param musicUrl - The URL of the music track.
 * @param image - The URL of the album image.
 * @param currentPosition - The current playback position as a percentage.
 *
 * @returns A styled React component that renders the music card.
 */
declare const MusicCard: ({ musicName, artist, musicUrl, images, currentPosition, }: MusicCardProps) => import("react/jsx-runtime").JSX.Element;
export default MusicCard;
