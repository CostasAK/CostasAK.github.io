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
            <Th>Published</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Publication
            title="Sensor Selection for Angle of Arrival Estimation Based on the Two-Target Cramér-Rao Bound"
            published="2023-06-04"
            conference="ICASSP 2023-2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
            pages="1-5"
            publisher="IEEE"
            authors="Costas A Kokke, Mario Coutino, Laura Anitori, Richard Heusdens, Geert Leus"
            abstract="Sensor selection is a useful method to help reduce data throughput, as well as computational, power, and hardware requirements, while still maintaining acceptable performance. Although minimizing the Cramér-Rao bound has been adopted previously for sparse sensing, it did not consider multiple targets and unknown source models. In this work, we propose to tackle the sensor selection problem for angle of arrival estimation using the worst-case Cramér-Rao bound of two uncorrelated sources. To do so, we cast the problem as a convex semi-definite program and retrieve the binary selection by randomized rounding. Through numerical examples related to a linear array, we illustrate the proposed method and show that it leads to the natural selection of elements at the edges plus the center of the linear array. This contrasts with the typical solutions obtained from minimizing the single-target Cramér-Rao bound."
          />
          <Publication
            title="Single-Pulse Estimation of Target Velocity on Planar Arrays"
            published="2022-08-29"
            conference="2022 30th European Signal Processing Conference (EUSIPCO)"
            pages="1811-1815"
            publisher="IEEE"
            authors="Costas A Kokke, Mario Coutiño, Richard Heusdens, Geert Leus, Laura Anitori"
            abstract="Doppler velocity estimation in pulse-Doppler radar is done by evaluating the target returns of bursts of pulses. While this provides convenience and accuracy, it requires multiple pulses. In adaptive and cognitive radar systems, the ability to adapt on consecutive pulses, instead of bursts, brings potential performance benefits. Hence, with radar transceiver arrays growing increasingly larger in their number of elements over the years, it may be time to re-evaluate how Doppler velocity can be estimated when using large planar arrays. In this work, we present variance bounds on the estimation of velocity using the Doppler shift as it appears in the array model. We also propose an efficient method of performing the velocity estimation and we verify its performance using Monte Carlo simulations."
          />
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
