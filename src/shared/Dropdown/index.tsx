'use client';

import React, { JSX, useEffect, useRef, useState } from 'react';
import cx from 'classnames';

// import { CircularLoader, ShimmerUiContainer } from '@components/index';

import useClickOutside from '../../hooks/useClickOutside';

import { getOptionLabel ,DROPDOWN_SEARCH_INPUT_PLACEHOLDER } from './constant';


import ArrowDown from '../../assets/chevron-down.svg';

// import { KeyboardEvent } from '@/constant/enumConstant';

import { DropdownProps } from './type';

import styles from './styles.module.css';



const Dropdown = <T extends { selectValue: keyof T }>({
    label = 'Select',
    options,
    multipleSelection,
    noOptionText = <span>Options are not available</span>,
    selectValue,
    value,
    loading,
    onChange,
    searchFilter,
    handleSearch,
    additionalStyle,
    optionsClassName,
    isSearchable = true,
    disable = false,
    shimmerLoader,
    shimmerClassName = '',
    className,
    widthClassName,
    dropDownTitle,
    optionAreaHeight,
}: DropdownProps<T>) => {
    const [dropdownValue, setDropdownValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    const [openUpwards, setOpenUpwards] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef, () => setIsOpen(false));

    const handleCheckbox = (item: T) => () => {
        onChange?.(item);
    };

    const handleSelectOption = (item: T) => () => {
        onChange?.(item);
        setIsOpen(false);
    };

    useEffect(() => {
        if (multipleSelection && value && Array.isArray(value) && value.length > 0) {
            const str = value
                .map((item) => getOptionLabel(item, selectValue))
                .join(',');

            setDropdownValue(str);
        } else if (value && !Array.isArray(value)) {
            setDropdownValue(getOptionLabel(value, selectValue));
        } else {
            setDropdownValue('');
        }
    }, [value, multipleSelection, selectValue]);

    useEffect(() => {
        if (isOpen) {
            const rect = dropdownRef.current?.getBoundingClientRect();

            if (rect) {
                const spaceBelow = window.innerHeight - rect.bottom;
                const spaceAbove = rect.top;

                setOpenUpwards(spaceBelow < 250 && spaceAbove > spaceBelow);
            }
        }
    }, [isOpen]);

    const renderOptions = (item: T) => {
        const label = getOptionLabel(item, selectValue);

        const selectedLabels: string[] = [];

        if (value && Array.isArray(value) && value.length > 0) {
            const arrayOfLabel = value.map((item) => getOptionLabel(item, selectValue));
            (arrayOfLabel,'arratyOfLabel');
            (value,'valuevalue');
            selectedLabels.push(...arrayOfLabel);
        }

        // (selectedLabels.includes(label),'bbababab')
        (selectedLabels,'selectedLabels')

        return (
            <label key={label} className={styles.checkbox}>
                <input
                    type="checkbox"
                    checked={selectedLabels.includes(label)}
                    onChange={handleCheckbox(item)}
                />
                <span>{label}</span>
            </label>
        );
    };

    return (
        <div className={cx(styles.wrapper, widthClassName)} ref={dropdownRef}>
            {shimmerLoader ? (
               <p>Loading...</p>
            ) : (
                <>
                    {dropDownTitle && (
                        <span className={styles.dropdownTitle}>
                            {dropDownTitle}
                        </span>
                    )}

                    <div
                        role='button'
                        tabIndex={0}
                        className={cx(
                            styles.dropdown,
                            { [styles.disable]: disable },
                            additionalStyle,
                            className,
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
                    >
                        <span
                            style={{
                                color: dropdownValue ? '#000' : '#98A2B3',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: 'inline-block',
                                maxWidth: '100%',
                            }}
                        >
                            {dropdownValue || label}
                        </span>

                        {/* <ArrowDown className={cx({ [styles.rotate]: isOpen })} /> */}
                        <img src={ArrowDown} className={cx({ [styles.rotate]: isOpen })} />
                    </div>

                    {isOpen && (
                        <div
                            className={cx(styles['dropdown-item-container'], optionAreaHeight, {
                                [styles.upwards]: openUpwards,
                            })}
                        >
                            {isSearchable && !loading && (
                                <div className={styles['search-input-container']}>
                                    <input
                                        type="text"
                                        name="dropdownSearch"
                                        value={searchFilter || ''}
                                        placeholder={DROPDOWN_SEARCH_INPUT_PLACEHOLDER}
                                        className={styles['search-input']}
                                        onChange={handleSearch}
                                    />
                                </div>
                            )}

                            {loading ? (
                                <p>Loading....</p>
                            ) : options?.length === 0 ? (
                                <div className={styles.noOptionContainer}>
                                    {noOptionText}
                                </div>
                            ) : (
                                <div role='button' className={cx(styles['options-container'])}>
                                    <ul
                                        className={cx(
                                            styles.option,
                                            multipleSelection && styles['checkbox-gap'],
                                            styles.cursor
                                        )}
                                    >
                                        {multipleSelection
                                            ? options.map((item) => renderOptions(item))
                                            : options.map((item) => {
                                                  const label = getOptionLabel(item, selectValue);

                                                  return (
                                                      <div
                                                          key={label}
                                                          role='button'
                                                          tabIndex={0}
                                                          className={cx(
                                                              styles.optionItem,
                                                              dropdownValue === label &&
                                                                  styles.selected,
                                                              optionsClassName,
                                                          )}
                                                          onClick={handleSelectOption(item)}
                                                          onKeyDown={handleSelectOption(item)}
                                                      >
                                                          <span>{label}</span>
                                                      </div>
                                                  );
                                              })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default React.memo(Dropdown) as unknown as <T>(props: DropdownProps<T>) => JSX.Element;