it('input with dates and custom fields', () => {
    const body = {
        "id": 209,
        "add_time": "2022-04-27 12:03:11",
        "won_time": "2022-04-28",
        "4fd9c6c32ac7a5ba04729c67d6cfc7db7ecb8d0c": "2022-11-07"
    };
    const timezone = 'Europe/London';
    const output = {
        "4fd9c6c32ac7a5ba04729c67d6cfc7db7ecb8d0c": new Date("2022-11-07T00:00:00.000Z"),
        "add_time": new Date("2022-04-27T12:03:11.000Z"),
        "id": 209,
        "won_time": new Date("2022-04-27T23:00:00.000Z"),
        "won_time-raw": "2022-04-28",
        "customRaw": {
            "4fd9c6c32ac7a5ba04729c67d6cfc7db7ecb8d0c": "2022-11-07"
        }
    };
    assert.deepEqual(getResponseOutput(body, timezone), output)
});

it('input with dates and no custom fields', () => {
    const body = {
        "id": 209,
        "add_time": "2022-04-27 12:03:11",
        "won_time": "2022-04-28"
    };
    const timezone = 'Europe/London';
    const output = {
        "add_time": new Date("2022-04-27T12:03:11.000Z"),
        "id": 209,
        "won_time": new Date("2022-04-27T23:00:00.000Z"),
        "won_time-raw": "2022-04-28",
    };
    assert.deepEqual(getResponseOutput(body, timezone), output)
});
it('input with dates and custom fields as array (Search modules)', () => {
    const body = {
        "id": 7,
        "type": "product",
        "owner": {
            "id": 7849619
        },
        "custom_fields": [
            "2022-11-11",
            "res"
        ],
        "prices": [
            {
                "id": 7,
                "cost": 0,
                "price": 0,
                "currency": "USD",
                "overhead_cost": null
            }
        ]
    };
    const timezone = 'Europe/London';
    const output = {
        "id": 7,
        "type": "product",
        "owner": {
            "id": 7849619
        },
        "custom_fields": [
            "2022-11-11",
            "res"
        ],
        "prices": [
            {
                "id": 7,
                "cost": 0,
                "price": 0,
                "currency": "USD",
                "overhead_cost": null
            }
        ]
    };
    assert.deepEqual(getResponseOutput(body, timezone), output)
});


it('input from webhook with dates and custom fields', () => {
    const body = {
        "id": 209,
        "add_time": "2022-04-27 12:03:11",
        "won_time": "2022-04-28"
    };
    const timezone = 'Europe/London';
    const metadata = [
        {
            "name": "event",
            "type": "text",
            "label": "Event"
        },
        {
            "name": "current",
            "spec": [
                {
                    "name": "id",
                    "type": "number",
                    "label": "Deal ID"
                },
                {
                    "name": "creator_user_id",
                    "type": "number",
                    "label": "Creator user"
                },
                {
                    "name": "user_id",
                    "type": "collection",
                    "label": "User"
                },
                {
                    "name": "person_id",
                    "type": "number",
                    "label": "Person"
                },
                {
                    "name": "org_id",
                    "type": "number",
                    "label": "Organization"
                },
                {
                    "name": "stage_id",
                    "type": "number",
                    "label": "Stage ID"
                },
                {
                    "name": "title",
                    "type": "text",
                    "label": "Title"
                },
                {
                    "name": "value",
                    "type": "number",
                    "label": "Value"
                },
                {
                    "name": "currency",
                    "type": "text",
                    "label": "Currency"
                },
                {
                    "name": "add_time",
                    "type": "date",
                    "label": "Add time"
                },
                {
                    "name": "update_time",
                    "type": "date",
                    "label": "Update time"
                },
                {
                    "name": "stage_change_time",
                    "type": "date",
                    "label": "Stage change time"
                },
                {
                    "name": "active",
                    "type": "boolean",
                    "label": "Active"
                },
                {
                    "name": "deleted",
                    "type": "boolean",
                    "label": "Deleted"
                },
                {
                    "name": "status",
                    "type": "text",
                    "label": "Status"
                },
                {
                    "name": "probability",
                    "type": "text",
                    "label": "Probability"
                },
                {
                    "name": "next_activity_date",
                    "type": "date",
                    "label": "Next activity date"
                },
                {
                    "name": "next_activity_date-raw",
                    "type": "text",
                    "label": "Next activity date (raw)"
                },
                {
                    "name": "next_activity_time",
                    "type": "date",
                    "label": "Next activity time"
                },
                {
                    "name": "next_activity_id",
                    "type": "number",
                    "label": "Next activity ID"
                },
                {
                    "name": "last_activity_id",
                    "type": "number",
                    "label": "Last activity ID"
                },
                {
                    "name": "last_activity_date",
                    "type": "date",
                    "label": "Last activity date"
                },
                {
                    "name": "last_activity_date-raw",
                    "type": "text",
                    "label": "Last activity date (raw)"
                },
                {
                    "name": "lost_reason",
                    "type": "text",
                    "label": "Lost reason"
                },
                {
                    "name": "visible_to",
                    "type": "text",
                    "label": "Visible to"
                },
                {
                    "name": "close_time",
                    "type": "date",
                    "label": "Close time"
                },
                {
                    "name": "close_time-raw",
                    "type": "text",
                    "label": "Close time (raw)"
                },
                {
                    "name": "pipeline_id",
                    "type": "number",
                    "label": "Pipeline ID"
                },
                {
                    "name": "won_time",
                    "type": "date",
                    "label": "Won time"
                },
                {
                    "name": "won_time-raw",
                    "type": "text",
                    "label": "Won time (raw)"
                },
                {
                    "name": "first_won_time",
                    "type": "date",
                    "label": "First won time"
                },
                {
                    "name": "first_won_time-raw",
                    "type": "text",
                    "label": "First won time (raw)"
                },
                {
                    "name": "lost_time",
                    "type": "date",
                    "label": "Lost time"
                },
                {
                    "name": "lost_time-raw",
                    "type": "text",
                    "label": "Lost time (raw)"
                },
                {
                    "name": "products_count",
                    "type": "number",
                    "label": "Products count"
                },
                {
                    "name": "files_count",
                    "type": "number",
                    "label": "Files count"
                },
                {
                    "name": "notes_count",
                    "type": "number",
                    "label": "Notes count"
                },
                {
                    "name": "followers_count",
                    "type": "number",
                    "label": "Followers count"
                },
                {
                    "name": "email_messages_count",
                    "type": "number",
                    "label": "Email messages count"
                },
                {
                    "name": "activities_count",
                    "type": "number",
                    "label": "Activities count"
                },
                {
                    "name": "done_activities_count",
                    "type": "number",
                    "label": "Done activities count"
                },
                {
                    "name": "undone_activities_count",
                    "type": "number",
                    "label": "Undone activities count"
                },
                {
                    "name": "reference_activities_count",
                    "type": "number",
                    "label": "Reference activities count"
                },
                {
                    "name": "participants_count",
                    "type": "number",
                    "label": "Participants count"
                },
                {
                    "name": "expected_close_date",
                    "type": "text",
                    "label": "Expected close date"
                },
                {
                    "name": "expected_close_date-raw",
                    "type": "text",
                    "label": "Expected close date (raw)"
                },
                {
                    "name": "last_incoming_mail_time",
                    "type": "date",
                    "label": "Last incoming mail time"
                },
                {
                    "name": "last_outgoing_mail_time",
                    "type": "date",
                    "label": "Last outgoing mail time"
                },
                {
                    "name": "stage_order_nr",
                    "type": "number",
                    "label": "Stage order nr"
                },
                {
                    "name": "person_name",
                    "type": "text",
                    "label": "Person name"
                },
                {
                    "name": "org_name",
                    "type": "text",
                    "label": "Org name"
                },
                {
                    "name": "next_activity_subject",
                    "type": "text",
                    "label": "Next activity subject"
                },
                {
                    "name": "next_activity_type",
                    "type": "text",
                    "label": "Next activity type"
                },
                {
                    "name": "next_activity_duration",
                    "type": "text",
                    "label": "Next activity duration"
                },
                {
                    "name": "next_activity_note",
                    "type": "text",
                    "label": "Next activity note"
                },
                {
                    "name": "formatted_value",
                    "type": "text",
                    "label": "Formatted value"
                },
                {
                    "name": "weighted_value",
                    "type": "number",
                    "label": "Weighted value"
                },
                {
                    "name": "formatted_weighted_value",
                    "type": "text",
                    "label": "Formatted weighted value"
                },
                {
                    "name": "weighted_value_currency",
                    "type": "text",
                    "label": "Weighted value currency"
                },
                {
                    "name": "rotten_time",
                    "type": "text",
                    "label": "Rotten time"
                },
                {
                    "name": "owner_name",
                    "type": "text",
                    "label": "Owner name"
                },
                {
                    "name": "cc_email",
                    "type": "text",
                    "label": "Cc email"
                },
                {
                    "name": "org_hidden",
                    "type": "boolean",
                    "label": "Org hidden"
                },
                {
                    "name": "person_hidden",
                    "type": "boolean",
                    "label": "Person hidden"
                },
                {
                    "name": "average_time_to_won",
                    "spec": [
                        {
                            "name": "y",
                            "type": "number",
                            "label": "Y"
                        },
                        {
                            "name": "m",
                            "type": "number",
                            "label": "M"
                        },
                        {
                            "name": "d",
                            "type": "number",
                            "label": "D"
                        },
                        {
                            "name": "h",
                            "type": "number",
                            "label": "H"
                        },
                        {
                            "name": "i",
                            "type": "number",
                            "label": "I"
                        },
                        {
                            "name": "s",
                            "type": "number",
                            "label": "S"
                        },
                        {
                            "name": "total_seconds",
                            "type": "number",
                            "label": "Total seconds"
                        }
                    ],
                    "type": "collection",
                    "label": "Average time to won"
                },
                {
                    "name": "average_stage_progress",
                    "type": "number",
                    "label": "Average stage progress"
                },
                {
                    "name": "age",
                    "spec": [
                        {
                            "name": "y",
                            "type": "number",
                            "label": "Y"
                        },
                        {
                            "name": "m",
                            "type": "number",
                            "label": "M"
                        },
                        {
                            "name": "d",
                            "type": "number",
                            "label": "D"
                        },
                        {
                            "name": "h",
                            "type": "number",
                            "label": "H"
                        },
                        {
                            "name": "i",
                            "type": "number",
                            "label": "I"
                        },
                        {
                            "name": "s",
                            "type": "number",
                            "label": "S"
                        },
                        {
                            "name": "total_seconds",
                            "type": "number",
                            "label": "Total seconds"
                        }
                    ],
                    "type": "collection",
                    "label": "Age"
                },
                {
                    "name": "stay_in_pipeline_stages",
                    "type": "collection",
                    "label": "Stay in pipeline stages"
                },
                {
                    "name": "last_activity",
                    "type": "date",
                    "label": "Last activity"
                },
                {
                    "name": "next_activity",
                    "type": "date",
                    "label": "Next activity"
                },
                {
                    "name": "336656b5ccd9363f927c6ca514fd84df5c326339",
                    "label": "facebook (custom)"
                },
                {
                    "name": "92a8105b9beae0a9cfcf64c3acdcbfef8a8af4d9",
                    "type": "date",
                    "label": "Second test field date (custom)"
                },
                {
                    "name": "aaf465d598faae2568c3ca22cc82cad09ea4687b",
                    "label": "Make (custom)"
                },
                {
                    "name": "7b046bfed33b795e24b3b58bc9fe0f357d44ea7b",
                    "label": "make-new test (custom)"
                },
                {
                    "name": "c90ee40dc1cbe42d2211c1bc7230777b4227a144",
                    "type": "date",
                    "label": "Custom date Make (custom)"
                },
                {
                    "name": "205e90cf9bbe244035c5947a8ca2031f006fa101",
                    "label": "Company Description (custom)"
                },
                {
                    "name": "dcbe2da0d54ad2e460e20cc5c96816d8d84540b8",
                    "label": "Company Description (custom)"
                },
                {
                    "name": "customRaw",
                    "spec": [
                        {
                            "name": "336656b5ccd9363f927c6ca514fd84df5c326339",
                            "label": "facebook (custom)"
                        },
                        {
                            "name": "92a8105b9beae0a9cfcf64c3acdcbfef8a8af4d9",
                            "type": "date",
                            "label": "Second test field date (custom)"
                        },
                        {
                            "name": "aaf465d598faae2568c3ca22cc82cad09ea4687b",
                            "label": "Make (custom)"
                        },
                        {
                            "name": "7b046bfed33b795e24b3b58bc9fe0f357d44ea7b",
                            "label": "make-new test (custom)"
                        },
                        {
                            "name": "c90ee40dc1cbe42d2211c1bc7230777b4227a144",
                            "type": "date",
                            "label": "Custom date Make (custom)"
                        },
                        {
                            "name": "205e90cf9bbe244035c5947a8ca2031f006fa101",
                            "label": "Company Description (custom)"
                        },
                        {
                            "name": "dcbe2da0d54ad2e460e20cc5c96816d8d84540b8",
                            "label": "Company Description (custom)"
                        }
                    ],
                    "type": "collection",
                    "label": "Custom Fields Raw"
                }
            ],
            "type": "collection",
            "label": "Current"
        },
        {
            "name": "previous",
            "spec": [
                {
                    "name": "id",
                    "type": "number",
                    "label": "Deal ID"
                },
                {
                    "name": "creator_user_id",
                    "type": "number",
                    "label": "Creator user"
                },
                {
                    "name": "user_id",
                    "type": "collection",
                    "label": "User"
                },
                {
                    "name": "person_id",
                    "type": "number",
                    "label": "Person"
                },
                {
                    "name": "org_id",
                    "type": "number",
                    "label": "Organization"
                },
                {
                    "name": "stage_id",
                    "type": "number",
                    "label": "Stage ID"
                },
                {
                    "name": "title",
                    "type": "text",
                    "label": "Title"
                },
                {
                    "name": "value",
                    "type": "number",
                    "label": "Value"
                },
                {
                    "name": "currency",
                    "type": "text",
                    "label": "Currency"
                },
                {
                    "name": "add_time",
                    "type": "date",
                    "label": "Add time"
                },
                {
                    "name": "update_time",
                    "type": "date",
                    "label": "Update time"
                },
                {
                    "name": "stage_change_time",
                    "type": "date",
                    "label": "Stage change time"
                },
                {
                    "name": "active",
                    "type": "boolean",
                    "label": "Active"
                },
                {
                    "name": "deleted",
                    "type": "boolean",
                    "label": "Deleted"
                },
                {
                    "name": "status",
                    "type": "text",
                    "label": "Status"
                },
                {
                    "name": "probability",
                    "type": "text",
                    "label": "Probability"
                },
                {
                    "name": "next_activity_date",
                    "type": "date",
                    "label": "Next activity date"
                },
                {
                    "name": "next_activity_date-raw",
                    "type": "text",
                    "label": "Next activity date (raw)"
                },
                {
                    "name": "next_activity_time",
                    "type": "date",
                    "label": "Next activity time"
                },
                {
                    "name": "next_activity_id",
                    "type": "number",
                    "label": "Next activity ID"
                },
                {
                    "name": "last_activity_id",
                    "type": "number",
                    "label": "Last activity ID"
                },
                {
                    "name": "last_activity_date",
                    "type": "date",
                    "label": "Last activity date"
                },
                {
                    "name": "last_activity_date-raw",
                    "type": "text",
                    "label": "Last activity date (raw)"
                },
                {
                    "name": "lost_reason",
                    "type": "text",
                    "label": "Lost reason"
                },
                {
                    "name": "visible_to",
                    "type": "text",
                    "label": "Visible to"
                },
                {
                    "name": "close_time",
                    "type": "date",
                    "label": "Close time"
                },
                {
                    "name": "close_time-raw",
                    "type": "text",
                    "label": "Close time (raw)"
                },
                {
                    "name": "pipeline_id",
                    "type": "number",
                    "label": "Pipeline ID"
                },
                {
                    "name": "won_time",
                    "type": "date",
                    "label": "Won time"
                },
                {
                    "name": "won_time-raw",
                    "type": "text",
                    "label": "Won time (raw)"
                },
                {
                    "name": "first_won_time",
                    "type": "date",
                    "label": "First won time"
                },
                {
                    "name": "first_won_time-raw",
                    "type": "text",
                    "label": "First won time (raw)"
                },
                {
                    "name": "lost_time",
                    "type": "date",
                    "label": "Lost time"
                },
                {
                    "name": "lost_time-raw",
                    "type": "text",
                    "label": "Lost time (raw)"
                },
                {
                    "name": "products_count",
                    "type": "number",
                    "label": "Products count"
                },
                {
                    "name": "files_count",
                    "type": "number",
                    "label": "Files count"
                },
                {
                    "name": "notes_count",
                    "type": "number",
                    "label": "Notes count"
                },
                {
                    "name": "followers_count",
                    "type": "number",
                    "label": "Followers count"
                },
                {
                    "name": "email_messages_count",
                    "type": "number",
                    "label": "Email messages count"
                },
                {
                    "name": "activities_count",
                    "type": "number",
                    "label": "Activities count"
                },
                {
                    "name": "done_activities_count",
                    "type": "number",
                    "label": "Done activities count"
                },
                {
                    "name": "undone_activities_count",
                    "type": "number",
                    "label": "Undone activities count"
                },
                {
                    "name": "reference_activities_count",
                    "type": "number",
                    "label": "Reference activities count"
                },
                {
                    "name": "participants_count",
                    "type": "number",
                    "label": "Participants count"
                },
                {
                    "name": "expected_close_date",
                    "type": "text",
                    "label": "Expected close date"
                },
                {
                    "name": "expected_close_date-raw",
                    "type": "text",
                    "label": "Expected close date (raw)"
                },
                {
                    "name": "last_incoming_mail_time",
                    "type": "date",
                    "label": "Last incoming mail time"
                },
                {
                    "name": "last_outgoing_mail_time",
                    "type": "date",
                    "label": "Last outgoing mail time"
                },
                {
                    "name": "stage_order_nr",
                    "type": "number",
                    "label": "Stage order nr"
                },
                {
                    "name": "person_name",
                    "type": "text",
                    "label": "Person name"
                },
                {
                    "name": "org_name",
                    "type": "text",
                    "label": "Org name"
                },
                {
                    "name": "next_activity_subject",
                    "type": "text",
                    "label": "Next activity subject"
                },
                {
                    "name": "next_activity_type",
                    "type": "text",
                    "label": "Next activity type"
                },
                {
                    "name": "next_activity_duration",
                    "type": "text",
                    "label": "Next activity duration"
                },
                {
                    "name": "next_activity_note",
                    "type": "text",
                    "label": "Next activity note"
                },
                {
                    "name": "formatted_value",
                    "type": "text",
                    "label": "Formatted value"
                },
                {
                    "name": "weighted_value",
                    "type": "number",
                    "label": "Weighted value"
                },
                {
                    "name": "formatted_weighted_value",
                    "type": "text",
                    "label": "Formatted weighted value"
                },
                {
                    "name": "weighted_value_currency",
                    "type": "text",
                    "label": "Weighted value currency"
                },
                {
                    "name": "rotten_time",
                    "type": "text",
                    "label": "Rotten time"
                },
                {
                    "name": "owner_name",
                    "type": "text",
                    "label": "Owner name"
                },
                {
                    "name": "cc_email",
                    "type": "text",
                    "label": "Cc email"
                },
                {
                    "name": "org_hidden",
                    "type": "boolean",
                    "label": "Org hidden"
                },
                {
                    "name": "person_hidden",
                    "type": "boolean",
                    "label": "Person hidden"
                },
                {
                    "name": "average_time_to_won",
                    "spec": [
                        {
                            "name": "y",
                            "type": "number",
                            "label": "Y"
                        },
                        {
                            "name": "m",
                            "type": "number",
                            "label": "M"
                        },
                        {
                            "name": "d",
                            "type": "number",
                            "label": "D"
                        },
                        {
                            "name": "h",
                            "type": "number",
                            "label": "H"
                        },
                        {
                            "name": "i",
                            "type": "number",
                            "label": "I"
                        },
                        {
                            "name": "s",
                            "type": "number",
                            "label": "S"
                        },
                        {
                            "name": "total_seconds",
                            "type": "number",
                            "label": "Total seconds"
                        }
                    ],
                    "type": "collection",
                    "label": "Average time to won"
                },
                {
                    "name": "average_stage_progress",
                    "type": "number",
                    "label": "Average stage progress"
                },
                {
                    "name": "age",
                    "spec": [
                        {
                            "name": "y",
                            "type": "number",
                            "label": "Y"
                        },
                        {
                            "name": "m",
                            "type": "number",
                            "label": "M"
                        },
                        {
                            "name": "d",
                            "type": "number",
                            "label": "D"
                        },
                        {
                            "name": "h",
                            "type": "number",
                            "label": "H"
                        },
                        {
                            "name": "i",
                            "type": "number",
                            "label": "I"
                        },
                        {
                            "name": "s",
                            "type": "number",
                            "label": "S"
                        },
                        {
                            "name": "total_seconds",
                            "type": "number",
                            "label": "Total seconds"
                        }
                    ],
                    "type": "collection",
                    "label": "Age"
                },
                {
                    "name": "stay_in_pipeline_stages",
                    "type": "collection",
                    "label": "Stay in pipeline stages"
                },
                {
                    "name": "last_activity",
                    "type": "date",
                    "label": "Last activity"
                },
                {
                    "name": "next_activity",
                    "type": "date",
                    "label": "Next activity"
                },
                {
                    "name": "336656b5ccd9363f927c6ca514fd84df5c326339",
                    "label": "facebook (custom)"
                },
                {
                    "name": "92a8105b9beae0a9cfcf64c3acdcbfef8a8af4d9",
                    "type": "date",
                    "label": "Second test field date (custom)"
                },
                {
                    "name": "aaf465d598faae2568c3ca22cc82cad09ea4687b",
                    "label": "Make (custom)"
                },
                {
                    "name": "7b046bfed33b795e24b3b58bc9fe0f357d44ea7b",
                    "label": "make-new test (custom)"
                },
                {
                    "name": "c90ee40dc1cbe42d2211c1bc7230777b4227a144",
                    "type": "date",
                    "label": "Custom date Make (custom)"
                },
                {
                    "name": "205e90cf9bbe244035c5947a8ca2031f006fa101",
                    "label": "Company Description (custom)"
                },
                {
                    "name": "dcbe2da0d54ad2e460e20cc5c96816d8d84540b8",
                    "label": "Company Description (custom)"
                },
                {
                    "name": "customRaw",
                    "spec": [
                        {
                            "name": "336656b5ccd9363f927c6ca514fd84df5c326339",
                            "label": "facebook (custom)"
                        },
                        {
                            "name": "92a8105b9beae0a9cfcf64c3acdcbfef8a8af4d9",
                            "type": "date",
                            "label": "Second test field date (custom)"
                        },
                        {
                            "name": "aaf465d598faae2568c3ca22cc82cad09ea4687b",
                            "label": "Make (custom)"
                        },
                        {
                            "name": "7b046bfed33b795e24b3b58bc9fe0f357d44ea7b",
                            "label": "make-new test (custom)"
                        },
                        {
                            "name": "c90ee40dc1cbe42d2211c1bc7230777b4227a144",
                            "type": "date",
                            "label": "Custom date Make (custom)"
                        },
                        {
                            "name": "205e90cf9bbe244035c5947a8ca2031f006fa101",
                            "label": "Company Description (custom)"
                        },
                        {
                            "name": "dcbe2da0d54ad2e460e20cc5c96816d8d84540b8",
                            "label": "Company Description (custom)"
                        }
                    ],
                    "type": "collection",
                    "label": "Custom Fields Raw"
                }
            ],
            "type": "collection",
            "label": "Previous"
        }
    ];
    const output = {
        "add_time": new Date("2022-04-27T12:03:11.000Z"),
        "id": 209,
        "won_time": new Date("2022-04-27T23:00:00.000Z"),
        "won_time-raw": "2022-04-28",
    };
    assert.deepEqual(getResponseOutput(body, timezone, metadata, 'webhook'), output)
});

it('input with numbers looking like dates should not parse date', () => {
    const body = {
        "id": 209,
        "notDateTime": "9999-99-99 99:99:99",
        "notDate": "2222-22-22"
    };
    const timezone = 'Europe/London';
    const output = {
        "id": 209,
        "notDateTime": "9999-99-99 99:99:99",
        "notDate": "2222-22-22"
    };
    assert.deepEqual(getResponseOutput(body, timezone), output)
});

it('custom fields multiple choice should return object for each choice', () => {
    const body = {
        "4b9876d8b71cc1966257c361c12932c850624336": "9,10,11",
        "ef2538d44c3b0a6811403bdce506a405477ff3a2": 1,
        "453328589fc71294fb0529b677c7fc64150dd688": "Custom large"
    };
    const timezone = 'Europe/London';
    const metadata = [
        {
            "name": "4b9876d8b71cc1966257c361c12932c850624336",
            "spec": [
                {
                    "name": "id",
                    "type": "integer",
                    "label": "Option ID"
                },
                {
                    "name": "label",
                    "type": "text",
                    "label": "Option Label"
                }
            ],
            "type": "array",
            "label": "Custom multiple (custom)",
            "metadata": {
                "type": "set",
                "options": {
                    "9": "jedna",
                    "10": "dve",
                    "11": "tri"
                }
            }
        },
        {
            "name": "ef2538d44c3b0a6811403bdce506a405477ff3a2",
            "type": "number",
            "label": "Custom numerical (custom)"
        },
        {
            "name": "453328589fc71294fb0529b677c7fc64150dd688",
            "type": "text",
            "label": "Custom large (custom)"
        }
    ];
    const output = {
        "id": 209,
        "notDateTime": "9999-99-99 99:99:99",
        "notDate": "2222-22-22"
    };
    assert.deepEqual(getResponseOutput(body, timezone, metadata), output)
});