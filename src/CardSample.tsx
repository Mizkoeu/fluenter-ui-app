import React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Stack } from 'office-ui-fabric-react';

const previewProps: IDocumentCardPreviewProps = {
    previewImages: [
      {
        name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
        linkProps: {
          href: 'http://www.mikezou.com',
          target: '_blank',
        },
        previewImageSrc: "https://wallpapercave.com/wp/J57hrVh.png",
        imageFit: ImageFit.cover,
        width: 318,
        height: 196,
      }
    ],
  };
  const DocumentCardActivityPeople = [{ name: 'Mickey Zou', profileImageSrc: "https://th.bing.com/th/id/OIP.GU-lsfa5H05uLvtsw4ElpgHaLC?pid=Api&rs=1" }];

export const CardSample: React.FunctionComponent = () => {
    return (
      <Stack
        horizontalAlign="start"
        verticalAlign="center"
        verticalFill
        styles={{
          root: {
            margin: '0 auto',
            textAlign: 'left',
            color: '#605e5c',
            border: "2px solid #eee",
          }
        }}
      >
        <DocumentCard>
          <DocumentCardPreview {...previewProps} />
          <DocumentCardTitle
            title={
              'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_' +
              'it_needs_truncating.pptx'
            }
            shouldTruncate
          />
          <DocumentCardActivity activity="Created a few minutes ago" people={DocumentCardActivityPeople} />
        </DocumentCard>
      </Stack>
    );
};