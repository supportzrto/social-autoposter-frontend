'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';
import {
    UploadCloud,
    FileSpreadsheet,
    X,
} from 'lucide-react';

type ExcelRow = {
    [key: string]: string;
};

const VALID_PLATFORMS = [
    'instagram',
    'facebook',
    'youtube',
    'linkedin',
    'twitter',
];

const VALID_MEDIA_TYPES = [
    'image',
    'video',
    'reel',
];

function formatExcelDate(value: string | number) {
    if (typeof value === 'number') {
        const excelDate = XLSX.SSF.parse_date_code(value);

        if (!excelDate) return 'Invalid date';

        const date = new Date(
            excelDate.y,
            excelDate.m - 1,
            excelDate.d,
            excelDate.H,
            excelDate.M
        );

        return date.toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        });
    }

    return value;
}

function validateRow(row: ExcelRow) {
    const errors: string[] = [];

    if (!row.title) {
        errors.push('Missing title');
    }

    if (!row.media_url) {
        errors.push('Missing media URL');
    }

    if (
        row.media_type &&
        !VALID_MEDIA_TYPES.includes(
            row.media_type.toLowerCase()
        )
    ) {
        errors.push('Invalid media type');
    }

    if (row.platforms) {
        const platforms = row.platforms
            .split(',')
            .map((p: string) => p.trim().toLowerCase());

        const invalid = platforms.filter(
            (p: string) => !VALID_PLATFORMS.includes(p)
        );

        if (invalid.length > 0) {
            errors.push('Invalid platform');
        }
    }

    return {
        valid: errors.length === 0,
        errors,
    };
}

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [rows, setRows] = useState<ExcelRow[]>([]);
    const [headers, setHeaders] = useState<string[]>([]);

    const handleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile = e.target.files?.[0];

        if (!selectedFile) return;

        setFile(selectedFile);

        const data = await selectedFile.arrayBuffer();

        const workbook = XLSX.read(data);

        const sheetName = workbook.SheetNames[0];

        const worksheet = workbook.Sheets[sheetName];

        const jsonData: ExcelRow[] =
            XLSX.utils.sheet_to_json(worksheet);

        setRows(jsonData);

        if (jsonData.length > 0) {
            setHeaders(Object.keys(jsonData[0]));
        }
    };

    const removeFile = () => {
        setFile(null);
        setRows([]);
        setHeaders([]);
    };

    return (
        <div className="p-6 max-w-7xl">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Upload Excel
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Upload and preview scheduled posts.
                </p>
            </div>

            {/* Upload Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">

                {/* Upload Box */}
                <label
                    className="border-2 border-dashed border-gray-300
          rounded-2xl h-72 flex flex-col items-center
          justify-center text-center cursor-pointer
          hover:border-indigo-400 hover:bg-indigo-50/30
          transition-colors"
                >
                    <input
                        type="file"
                        accept=".xlsx,.xls"
                        className="hidden"
                        onChange={handleFileChange}
                    />

                    <div className="w-16 h-16 rounded-full bg-indigo-100
            flex items-center justify-center mb-4">
                        <UploadCloud
                            size={28}
                            className="text-indigo-600"
                        />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900">
                        Drag & drop your Excel file
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                        Supported formats: .xlsx, .xls
                    </p>

                    <span
                        className="mt-5 inline-flex items-center gap-2
            bg-indigo-600 text-white px-4 py-2 rounded-lg
            text-sm font-medium"
                    >
                        Browse File
                    </span>
                </label>

                {/* File Card */}
                {file && (
                    <div className="mt-6 border border-gray-200 rounded-xl
            p-4 flex items-center justify-between">

                        <div className="flex items-center gap-3">

                            <div className="w-11 h-11 rounded-lg bg-green-100
                flex items-center justify-center">
                                <FileSpreadsheet
                                    size={22}
                                    className="text-green-600"
                                />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-900">
                                    {file.name}
                                </p>

                                <p className="text-xs text-gray-500">
                                    {(file.size / 1024).toFixed(2)} KB
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={removeFile}
                            className="w-8 h-8 rounded-lg border border-gray-200
              flex items-center justify-center hover:bg-red-50"
                        >
                            <X
                                size={16}
                                className="text-gray-500"
                            />
                        </button>
                    </div>
                )}

                {/* Preview Table */}
                {rows.length > 0 && (
                    <div className="mt-8">

                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Excel Preview
                            </h2>

                            <span className="text-sm text-gray-500">
                                {rows.length} rows found
                            </span>
                        </div>

                        <div className="border border-gray-200 rounded-xl overflow-hidden overflow-x-auto">
                            <table className="w-full text-sm">

                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-left px-4 py-3 font-semibold text-gray-600">
                                            Post
                                        </th>

                                        <th className="text-left px-4 py-3 font-semibold text-gray-600">
                                            Media Type
                                        </th>

                                        <th className="text-left px-4 py-3 font-semibold text-gray-600">
                                            Platforms
                                        </th>

                                        <th className="text-left px-4 py-3 font-semibold text-gray-600">
                                            Schedule
                                        </th>

                                        <th className="text-left px-4 py-3 font-semibold text-gray-600">
                                            Media URL
                                        </th>

                                        <th className="text-left px-4 py-3 font-semibold text-gray-600">
                                            Validation
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {rows.slice(0, 10).map((row, index) => {
                                        const validation = validateRow(row);

                                        return (
                                            <tr
                                                key={index}
                                                className="border-t border-gray-100 hover:bg-gray-50"
                                            >
                                                {/* Title */}
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    <div className="flex items-center gap-3">

                                                        {/* Media Preview */}
                                                        {row.media_type === 'image' ? (
                                                            <img
                                                                src={row.media_url}
                                                                alt=""
                                                                className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                                                            />
                                                        ) : (
                                                            <div className="w-12 h-12 rounded-lg bg-gray-100
                flex items-center justify-center border border-gray-200">
                                                                🎥
                                                            </div>
                                                        )}

                                                        <div>
                                                            <p className="font-medium text-gray-900">
                                                                {row.title || 'Untitled'}
                                                            </p>

                                                            <p className="text-xs text-gray-500 mt-1">
                                                                {row.caption}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Media Type */}
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    <span className="text-sm text-gray-700 capitalize">
                                                        {row.media_type}
                                                    </span>
                                                </td>

                                                {/* Platforms */}
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    <div className="flex flex-wrap gap-1">
                                                        {row.platforms
                                                            ?.split(',')
                                                            .map((platform: string) => (
                                                                <span
                                                                    key={platform}
                                                                    className="px-2 py-1 rounded-md text-xs
                  bg-indigo-50 text-indigo-700"
                                                                >
                                                                    {platform.trim()}
                                                                </span>
                                                            ))}
                                                    </div>
                                                </td>

                                                {/* Schedule */}
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                                                    {formatExcelDate(row.schedule_time)}
                                                </td>

                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    <a
                                                        href={row.media_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2
    px-3 py-1.5 rounded-lg text-xs
    bg-blue-50 text-blue-700
    hover:bg-blue-100 transition-colors"
                                                    >
                                                        Open Media
                                                    </a>
                                                </td>

                                                {/* Status */}
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    {validation.valid ? (
                                                        <span className="inline-flex items-center gap-1
              px-2.5 py-1 rounded-full text-xs
              bg-green-50 text-green-700">
                                                            ✅ Valid
                                                        </span>
                                                    ) : (
                                                        <div className="flex flex-col gap-1">
                                                            <span className="inline-flex items-center gap-1
                px-2.5 py-1 rounded-full text-xs
                bg-red-50 text-red-700 w-fit">
                                                                ❌ Invalid
                                                            </span>

                                                            <div className="text-xs text-red-500">
                                                                {validation.errors.join(', ')}
                                                            </div>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>

                            </table>
                        </div>

                        {/* Upload Button */}
                        <div className="flex justify-end mt-6">
                            <button
                                className="bg-indigo-600 text-white
                px-5 py-2.5 rounded-xl text-sm font-medium
                hover:bg-indigo-700 transition-colors"
                            >
                                Confirm Upload
                            </button>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}