import React from "react"
import Card from "./Card"

const Services = props => (
  <React.Fragment>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                De braaaiiiins apocalypsi gorger omero prefrontal cortex undead
                survivor fornix dictum mauris.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an
                Undead cervello zombies.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                Sicut thalamus malus putrid brains voodoo horror. Nigh basal
                ganglia tofth eliv ingdead.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
)

export default Services
