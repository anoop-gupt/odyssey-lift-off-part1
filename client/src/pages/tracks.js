import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout } from '../components';
import TrackCard from '../containers/track-card';

const TRACKS = gql`
  query getTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
  }
}
  `;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  if (error) return `Error! ${error.message}`;
  if (loading) return 'Loading...';

  return <Layout grid> {data?.tracksForHome?.map((track) => (
    <TrackCard key={track.id} track={track} />
  ))}</Layout>;
};

export default Tracks;
