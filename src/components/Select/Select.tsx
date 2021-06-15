import React, { useEffect, useState } from 'react';
import SelectProps, { Theme } from './Select.props';
import './Select.scss';
import { Icons } from '../assets/Icons';
const Select: React.FC<any> = (props: SelectProps) => {
    const [displayOption, setdisplayOption] = useState(false);
    const [selectedOption, setSelectedOption] = useState(-1);
    const {
        theme,
        options,
        placeholder,
    } = props;
    const [finalOptions, setFinalOptions] = useState(options);

    const toggleDropdown = () => {
        setdisplayOption(!displayOption)
    }

    const closeDropdown = () => {
        setdisplayOption(false)
    }

    const optionOnclick = (selected: number) => {
        setSelectedOption(selected)
        if (props.onChange) {
            props.onChange(finalOptions[selected]);
        }
    }

    useEffect(() => {
        if (options && options.length) {
            const tempOptions: any = options.slice();
            const groupedOptions: any = [];
            tempOptions.map((option: any, i: number) => {
                if (option && option.group) {
                    tempOptions.map((x: any, j: number) => {
                        if (x && x.group === option.group) {
                            groupedOptions.push(x);
                            tempOptions[j] = null;
                        }
                    })
                    groupedOptions.push('end');
                } else {
                    if (option) {
                        groupedOptions.push(option);
                    }
                }
            })
            if (groupedOptions.length) {
                setFinalOptions(groupedOptions)
            }
        }
    }, [])

    return (
        <div className={`container-fluid d-flex flex-wrap p-5 ${theme === Theme.DARK ? 'bg-ui-dark' : 'bg-ui-light'}`} onClick={() => displayOption && closeDropdown()}>
            <div className="col-lg-2 col-sm-12">
                <div className="col-lg-6 col-md-3 d-flex justify-content-between pl-3 pb-1 select-menu"
                    onClick={toggleDropdown}>
                    <div className={`col-10 p-0 text-truncate ${theme === Theme.DARK ? 'text-light' : 'text-dark'}`}>
                        {selectedOption > -1 ? finalOptions[selectedOption].value : (placeholder ? placeholder : 'Select')}
                    </div>
                    <div>{Icons.chevron}</div>
                </div>

                {displayOption &&
                    <div className={`col-lg-10 col-md-5 mt-2 p-0 d-flex flex-column select-dropdown ${theme === Theme.DARK ? 'text-light' : 'text-dark'}`}>
                        {
                            finalOptions.map((option: any, i: number) => {
                                if (option === 'end') {
                                    return (
                                        <div key={i} className="border-top"></div>
                                    )
                                } else if (option) {
                                    return (
                                        <div
                                            className={`option d-flex ${(selectedOption > -1 && (selectedOption === i) ? 'selected-item' : '')}`}
                                            onClick={() => optionOnclick(i)}
                                            key={i}
                                        >
                                            <span className="col-lg-3">{selectedOption > -1 && (selectedOption === i) && Icons.check}</span>
                                            <div className="col-9 p-0" style={{ overflowWrap: 'break-word' }}>{option.value}</div>
                                        </div>
                                    )
                                }
                            })}
                    </div>
                }

            </div>
            {displayOption &&
                <div className={`ml-3 col-lg-3 col-md-8 col-sm-12 p-0 select-addt-data ${theme === Theme.DARK ? 'text-light' : 'text-dark'}`} style={{ height: 'max-content' }}>
                    {
                        finalOptions.map((option: any, i: number) => {
                            if (option === 'end') {
                                return (
                                    <div key={i} className="border-top"></div>
                                )
                            } else if (option) {
                                return (
                                    <div
                                        className={`option pl-3 p-1 d-flex ${(selectedOption > -1 && (selectedOption === i) ? 'selected-item' : '')}`}
                                        onClick={() => optionOnclick(i)}
                                        key={i}
                                    >
                                        <span className="col-1 p-0">{selectedOption > -1 && (selectedOption === i) && Icons.check}</span>
                                        <div className="col-11 pl-1">
                                            <div className="col-9 p-0 h6 mb-0" style={{ overflowWrap: 'break-word' }}>{option.value}</div>
                                            <div className="col-12 p-0" style={{ overflowWrap: 'break-word' }}>{option.addtData}</div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                </div>
            }
        </div>
    );
}

export default Select;
