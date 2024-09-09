import React from 'react';
import { Fieldset } from 'primereact/fieldset';

const SectionBlock = ({ data }) => {
    return (
        <div className="p-m-3">
            {data.map((item, index) => (
                <Fieldset
                    key={index}
                    legend={item.legend}
                    className="mx-5 my-3 custom-toggler transparent-fieldset same-width-legend"
                    collapsed={true}
                    toggleable
                >
                    <p className="m-5 transparent-text">{item.body}</p>
                </Fieldset>
            ))}

            <style>{`
                .transparent-fieldset {
                    background: rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                }

                .transparent-text {
                    color: #fff
                }

                .same-width-legend .p-fieldset-legend {
                    width: 100%; /* Make the legend full width */
                    text-align: center; /* Center the text inside the legend */
                    display: inline-block;
                    white-space: nowrap; /* Prevent the legend text from wrapping */
                }

                .p-fieldset-legend {
                    padding: 5px 10px;
                    font-weight: bold;
                    background: rgba(150, 150, 150, 0.2);
                    border-radius: 5px;
                    display: inline-block;
                }
                .p-fieldset-legend-text {
                    color: #FBFBFC;
                }
            `}</style>
        </div>
    );
};

export default SectionBlock;
