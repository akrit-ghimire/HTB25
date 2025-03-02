import React from "react";
import News from "./News";
import SpeciesMap from "./SpeciesMap";
import { ChevronsRight, ChevronsLeft } from "lucide-react";

const Tiles = ({
  children,
  name,
  summary,
  article,
  incrementArticles,
  decrementArticles,
  hideLeft,
  hideRight,
}) => {
  return (
    <div className="h-screen bg-light_c w-full rounded-tl-3xl rounded-bl-3xl p-6 gap-3 flex flex-col overflow-y-auto">
      <div className="flex flex-row gap-3">
        <div className="bg-light p-6 rounded-3xl w-full overflow-hidden flex flex-col justify-center align-center">
          <img src="src/assets/mapgif.gif" alt="" />
          <div className="pt-6">
            <p className="text-gray-700 font-bold">Presenting the Idea</p>
            <p className="text-gray-700">
              Our idea is to scrape sightings of cane toads in australia to use
              as an indicator for environmental stability and hence agriculture
              health the idea being that cane toads crash predator populations
              due to them being predated as they are poisonous this then causes
              an increase in pest species which has a negative impact on crop
              yields we have focused on predicting rodent population change
              based on uploaded cane toad sightings and inferring from well
              trusted studies the subsequent agricultural impact
            </p>
          </div>
        </div>
        <div className="bg-light rounded-3xl p-6 w-full flex flex-col gap-4">
          <div>
            <p className="text-gray-700 font-bold">Collecting Data</p>
            <p className="text-gray-700">
              We used 2 main locations for our sighting data these were the
              australian ALA bioCache and the inaturalist site this captured
              both scientific recordings and public sightings, hopefully giving
              a comprehensive overview of population trends we managed to
              collect around 40,000 cane toad sightings and 500,000 rodent
              sightings in the last 50 years
            </p>
            <p className="text-gray-700 font-bold mt-3">Cleaning the Data</p>
            <p className="text-gray-700">
              we grouped sighting counts temporally and spatially. spatially we
              grouped them into 1 degree by 1 degree coordinate squares, and
              temporally we grouped them by year we then removed outliers and
              all data points where either rodent or toad counts were less than
              5 we calculated year-on-year change values for rodents as our
              labels and our inputs were our spatial coordinates along with toad
              changes, toad counts and year
            </p>
            <p className="text-gray-700 font-bold mt-3">Presenting the Model</p>
            <p className="text-gray-700">
              We designed a random forest regressor for this task as the inputs
              and outputs were relatively simple we were able to achieve a RMSE
              of 0.6 and by analysing the importance of the input features we
              can show that toad_change is the most important metric accounting
              for 40% of the predictive power with toad count being next at 30
              we have saved the model so that it can be used anywhere at any
              time
            </p>
            <p className="text-gray-700 font-bold mt-3">Implications</p>
            <p className="text-gray-700">
              even in non plague years its estimated that mice cause damages
              (averaging around A$20 million per year in losses) we believe we
              can use the correlation above to infer prediction for the impact
              on crop yields we also have access to many prediction models for
              how cane toads will spread in future years this predictive power
              may be able to be applied to determine how agricultural regions
              may perform in coming years
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="bg-light rounded-3xl px-6 py-12 w-1/2">
          <img src="src/assets/line_chart.png" alt="" />
          <p className="text-gray-700">
            This graph shows how the number of cane toads and rodents in
            Australia has changed from 1935 to 2022. The blue line represents
            cane toads, and the green line represents rodents.The data suggests
            that as cane toads became more common, rodent populations also
            increased, which could be linked to the decline of certain snake
            species that used to keep rodent numbers under control.
          </p>
        </div>
        <div className="bg-light rounded-3xl p-6 w-1/2 flex flex-col gap-4">
          <div>
            <img src="src/assets/crop_line_chart.png" alt="" />
            <p className="text-gray-700">
              This graph shows how the production of three main crops—wheat,
              sugar cane, and barley—has changed over time from 1961 to 2023.
              The green line represents sugar cane, which has had the highest
              production levels among the three crops. The yellow line
              represents wheat and, The brown line represents barley
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="bg-light rounded-3xl px-6 py-12 w-1/2">
          <img src="src/assets/crop_rodents_combined.png" alt="" />
          <p className="text-gray-700">
            This chart shows the relationship between the rodent population
            (black line) and crop production (colored lines) over time. A clear
            pattern appears: when the rodent line spikes up, the crop lines
            often dip down. This suggests that an increase in rodents may be
            linked to a drop in crop production. This could be due to rodents
            feeding on crops or damaging fields. Managing rodent populations can
            help protect food supplies and maintain steady crop yields.
          </p>
        </div>
        <div className="bg-light rounded-3xl p-6 w-1/2 flex flex-col gap-4">
          <div>
            <img src="src/assets/Screenshot_2025-03-02_091107.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="bg-light rounded-3xl px-6 py-12 w-1/2">
          <img src="src/assets/Screenshot_2025-03-02_091628.jpg" alt="" />
        </div>
        <div className="bg-light rounded-3xl px-6 py-12 w-1/2 flex flex-col gap-2">
          <p className="bg-primary text-light px-4 py-1 w-fit rounded-md">
            Did you know!
          </p>
          <p className="font-bold">
            The following species are directly and indirectly predators of
            rodents:
          </p>
          <p>Snake : 100%</p>
          <p>Fox : 100%</p>
          <p>Canetoad : 90%</p>
          <p>Dog : 90%</p>
          <p>Cat : 80%</p>
          <p>Bird : 54%</p>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
