package com.wadiapp;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.GridView;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {


    final static int LISTVIEW_COLUMN = 1;
    final static int GRIDVIEW_COLUMN = 2;
    final static int GRID_ICON = R.drawable.ic_grid_icon;
    final static  int LIST_ICON = R.drawable.ic_list_icon;

    private  GridView mGridView;
    private FloatingActionButton mFab;
    private Context mContext;
    private boolean isListView = true;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mContext = this;
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        mGridView = (GridView) findViewById(R.id.gridView);
        final ArrayList<String> listItems = new ArrayList<>();

        //can be added from api json response
        listItems.add("Delhi");
        listItems.add("Bangalore");
        listItems.add("Lucknow");
        listItems.add("Pune");
        listItems.add("Gurgaon");
        listItems.add("Indore");
        listItems.add("Jhansi");
        listItems.add("Kolkata");
        listItems.add("Chennai");
        listItems.add("Ahmedabad");
        listItems.add("Surat");
        listItems.add("Jhansi");

        ArrayAdapter adapter = new ArrayAdapter(this, android.R.layout.simple_list_item_1, listItems);
        mGridView.setAdapter(adapter);
        mGridView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String cityName = listItems.get(position);
                Intent intent = new Intent(getBaseContext(), MainReactActivity.class);
                intent.putExtra("CITY_NAME", cityName);
                startActivity(intent);
            }
        });



        mFab = (FloatingActionButton) findViewById(R.id.fab);
        mFab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int currentColumns = mGridView.getNumColumns();
                int columns, icon;
                if(isListView){
                    columns = GRIDVIEW_COLUMN;
                    icon = LIST_ICON;
                }else{
                    columns = LISTVIEW_COLUMN;
                    icon = GRID_ICON;
                }
                mFab.setImageDrawable(ContextCompat.getDrawable(mContext,icon));
                mGridView.setNumColumns(columns);
            }
        });
    }

}
