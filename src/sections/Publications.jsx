import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { Publication } from "components/Publication";
import { SectionContainer } from "components/SectionContainer";

export const Publications = () => (
  <SectionContainer heading="Publications" maxW="container.xl">
    <TableContainer whiteSpace={"wrap"}>
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Cited</Th>
            <Th>Published</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Publication
            title="Binaural Beamforming Based on Automatic Interferer Selection"
            published="2019-04-17"
            conference="ICASSP 2019-2019 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
            pages="6850-6854"
            publisher="IEEE"
            authors="Costas A Kokke, Richard C Hendriks, Andreas I Koutrouvelis"
            abstract="Binaural cues are important for sound localization. In addition, spatially separated sound sources are more intelligible than when they are co-located. Binaural cue preservation in multi-microphone hearing assistive devices is therefore important for the user’s listening experience and safety. A number of linearly-constrained-minimum-variance (LCMV) based methods exist for this purpose. These are all limited in the number of sources for which they can preserve the binaural cues. We propose a method of automatically selecting the most important interfering sources using convex optimization. The proposed method is compared, using simulation experiments, to existing methods in terms of noise suppression and localization errors. It improves the performance of the joint binaural LCMV beam-former, by giving it more degrees of freedom for noise reduction and allows a larger number of (virtual) sources present in the scene."
          />
        </Tbody>
      </Table>
    </TableContainer>
  </SectionContainer>
);
